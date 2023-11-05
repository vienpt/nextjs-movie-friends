'use client'

import Link from "next/link";

export default function UnAuthenticatedPage() {
    return (
        <>
            <h2>Please login</h2>
            <Link href={'/'}>Back</Link>
        </>
    )
}