import Link from 'next/link';
import React from 'react';

export default function GetUuid(props) {
    const [uuid, setUuid] = React.useState('')
    // "화면"에 마운트가 된 이후 동작; client side rendering
    React.useEffect(() => {
        fetch('/api/uuid')
            .then(response => response.json())
            .then(json => setUuid(json.uuid))
    }, [])

    return (
        <div className="h-screen v-full flex flex-col justify-center items-center">
            {uuid};

            <div className="mt-4">
                <Link href="/">
                    <a>돌아가기</a>
                </Link>
            </div>
        </div>
    )

}