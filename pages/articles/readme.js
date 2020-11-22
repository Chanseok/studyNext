import Link from "next/link";
import React from 'react';

export default function ReadMe(props) {
    return (
        <div>
            <h1>Read Me</h1>
            <Link href="/articles">

                <a >&lt; Back to List</a>
            </Link>

        </div>
    )
}