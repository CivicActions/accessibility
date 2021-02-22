FROM node:15-alpine

ENV REVIEWDOG_VERSION=v0.11.0-nightly20201213+85edbc6

RUN \
    apk add --update \
    ca-certificates \
    bash~=5.0 \
    git \
    openssh \
    python3 \
    python3-dev \
    py3-pip \
    build-base && \
    pip3 install mkdocs mdx_truly_sane_lists

SHELL ["/bin/bash", "-o", "pipefail", "-c"]
RUN wget -O - -q https://raw.githubusercontent.com/reviewdog/nightly/master/install.sh | sh -s -- -b /usr/local/bin/ ${REVIEWDOG_VERSION}

COPY *.sh /usr/bin/

COPY config/* /usr/src/
RUN yarn install --production --non-interactive --cwd /usr/src/ && \
  yarn cache clean --force --cwd /usr/src/ \
  mkdir /src
ENV PATH="/usr/src/node_modules/.bin:${PATH}"
WORKDIR /src

ENTRYPOINT ["/bin/bash"]
CMD []
