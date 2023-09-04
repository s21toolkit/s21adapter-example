FROM oven/bun:latest as build

WORKDIR /build

COPY . .

RUN bun install --frozen-lockfile
RUN bun run generate:api

FROM oven/bun:latest

WORKDIR /app

COPY --from=build /build /app

RUN bun install --production --frozen-lockfile

ENTRYPOINT [ "bun", "run", "start" ]
