import styles from "./index.module.scss"
// import { useState } from "react"
/*	Using Next.js for implicit, automated routing with dependency injection
	to reduce redundant code,
	and automatic server-side rendering for increased client-side performance,
	UX, and improved SEO.
	Web crawlers like Googlebot have technically been able to access
	dynamic single page applications
	(that use client-side rendering) for a while now.
	However, the slower rendering times for CSR apps (among other issues)
	could influence ranking to some extent.
	SSR is still typically considered optimal assuming the developer can deal
	with some additional requirements when coding.
*/
// import Link from 'next/link'
import Head from "next/head"
// import {
// 	Head,
// 	Link,
// } from "next"

import NavBar from '../components/navbar.client'
import Login from "../components/login.client"
import Register from "../components/register.client"
import User from "../components/user.client"
import Dashboard from "../components/dashboard.client"

export default function () {

	return (
	<div className={styles.App}>
		<Head>
		<title>Recipe Tracker</title>
		<meta
			name="description"
			content="A CRUD app showcasing the MERN stack"
		/>
		</Head>
		<NavBar />
		<h1>Recipe Tracker</h1>
		<hr />
		<Login />
		<Register />
		<User />
		<Dashboard />
		{/* <br />
		<button>
			<Link href="/user">My Profile</Link>
		</button>
		<br />
		<button>
			<Link href="/dashboard">My Dashboard</Link>
		</button> */}
	</div>
)}
