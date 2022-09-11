export default function getEnv() {
	if (process.env.USER === "admin") {
		return process.env.NEXT_PUBLIC_PROD_URL
	} else {
		return process.env.NEXT_PUBLIC_DEV_URL
	}
}
