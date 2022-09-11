#!/usr/bin/env bash
(trap 'kill 0' SIGINT;
	cd Frontend && pnpm i && pnpm build && pnpm start &
	cd Backend && pnpm i && pnpm start
)
