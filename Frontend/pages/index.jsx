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
// import { useStore } from "zustand" // Only use in client-side components

// import NavBar from '../components/navbar.client'
// import Login from "../components/login.client"
// import Register from "../components/register.client"
// import User from "../components/user.client"
// import Dashboard from "../components/dashboard.client"
// import List from "../components/list.client"
// import Upload from "../components/upload.client"
import Landing from "../components/landing.client"

export default function () {

	// const toggleLogin = useStore((state) => state.toggleLogin)

	return (
	<div className="App">
		<Head>
		<title>Recipe Tracker</title>
		<meta
			name="description"
			content="A CRUD app showcasing the MERN stack"
		/>
		</Head>
		<Landing />
		{/* <NavBar />
		<h1>Recipe Tracker</h1>
		<hr />
		<Login />
		<Register />
		<User />
		<Dashboard />
		<List />
		<Upload /> */}
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
