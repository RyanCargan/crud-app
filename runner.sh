#!/usr/bin/env bash
(trap 'kill 0' SIGINT;
	cd Frontend && pnpm i && pnpm dev &
	cd Backend && pnpm i && pnpm start
)
