import Link from 'next/link';
import React from 'react';

export default function ArticleList(props) {
    return (
        <div>
            <h1>Article List</h1>

            <ul>
                <li>
                    <Link href="/articles/readme">
                    <a >ReadMe</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}