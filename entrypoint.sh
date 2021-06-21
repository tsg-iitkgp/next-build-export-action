#!/bin/bash
set -e
set -o pipefail

if [[ -n "$TOKEN" ]]; then
    GITHUB_TOKEN=$TOKEN
fi

if [[ -z "$PAGES_BRANCH" ]]; then
    PAGES_BRANCH="build"
fi

if [[ -z "$BUILD_DIR" ]]; then
    BUILD_DIR="."
fi

if [[ -n "$REPOSITORY" ]]; then
    TARGET_REPOSITORY=$REPOSITORY
else
    if [[ -z "$GITHUB_REPOSITORY" ]]; then
        echo "Set the GITHUB_REPOSITORY env variable."
        exit 1
    fi
    TARGET_REPOSITORY=${GITHUB_REPOSITORY}
fi

if [[ -z "$BUILD_ONLY" ]]; then
    BUILD_ONLY=false
fi

if [[ -z "$BUILD_THEMES" ]]; then
    BUILD_THEMES=false
fi

if [[ -z "$OUTPUT_DIR" ]]; then
    OUTPUT_DIR="out"
fi

if [[ -z "$GITHUB_TOKEN" ]] && [[ "$BUILD_ONLY" == false ]]; then
    echo "Set the GITHUB_TOKEN env variable."
    exit 1
fi

if [[ -z "$GITHUB_HOSTNAME" ]]; then
    GITHUB_HOSTNAME="github.com"
fi

minifyhtml() {
    COMMAND="htmlmin"
    find "$(pwd)" -iname "*.html" | sort -u | while read -r i; do
        $COMMAND -o "$i.new" "$i"
        rm "$i"
        mv "$i.new" "$i"
    done
}

minifyjs() {
    COMMAND="uglifyjs"
    find "$(pwd)" -iname "*.js" | sort -u | while read -r i; do
        $COMMAND -o "$i.new" "$i"
        rm "$i"
        mv "$i.new" "$i"
    done
}


main() {
    echo "Starting deploy..."

    git config --global url."https://".insteadOf git://
    ## $GITHUB_SERVER_URL is set as a default environment variable in all workflows, default is https://github.com
    git config --global url."$GITHUB_SERVER_URL/".insteadOf "git@${GITHUB_HOSTNAME}":

    version=$(yarn --version)
    remote_repo="https://${GITHUB_TOKEN}@${GITHUB_HOSTNAME}/${TARGET_REPOSITORY}.git"
    remote_branch=$PAGES_BRANCH

    echo "Using yarn $version"

    echo "Install yarn dependencies"
    yarn install --frozen-lockfile --silent

    echo "Building in $BUILD_DIR directory"
    cd $BUILD_DIR

    yarn build

    current_dir="$PWD"
    public_dir="$current_dir/$OUTPUT_DIR"
    cd "$public_dir"
    echo "Minifying HTML, JS and Images"
    minifyhtml
    minifyjs
    cd "$current_dir"

    if ${BUILD_ONLY}; then
        echo "Build complete. Deployment skipped by request"
        exit 0
    else
        echo "Pushing artifacts to ${TARGET_REPOSITORY}:$remote_branch"

        cd $OUTPUT_DIR
        git init
        git config user.name "GitHub Actions"
        git config user.email "github-actions-bot@users.noreply.${GITHUB_HOSTNAME}"
        git add .

        git commit -m "Deploy ${TARGET_REPOSITORY} to ${TARGET_REPOSITORY}:$remote_branch"
        git push --force "${remote_repo}" master:${remote_branch}

        echo "Deploy complete"
    fi
}

main "$@"