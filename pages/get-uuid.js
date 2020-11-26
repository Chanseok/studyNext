import Link from 'next/link';
import React from 'react';
import axios from 'axios';

export default function GetUuid(props) {
    console.log('GetUUid.render');
    /*
    const [uuid, setUuid] = React.useState('')
    // "화면"에 마운트가 된 이후 동작; client side rendering
    React.useEffect(() => {
        fetch('/api/uuid')
            .then(response => response.json())
            .then(json => setUuid(json.uuid))
    }, [])
    */
    console.log(props.debug)

    return (
        <div className="h-screen v-full flex flex-col justify-center items-center">
            <h1 className="mb-4">{props.label}</h1>
            {props.uuid};

            <div className="mt-4">
                <Link href="/">
                    <a>돌아가기</a>
                </Link>
            </div>
        </div>
    )

}

// getInitialProps
GetUuid.getInitialProps = async function(){
    // 반드시 aync funciton으로 작성
    
    console.log('GetUuid.getInitialProps');
    const response = await axios.get('http://localhost:3000'+'/api/uuid');
    return {
        label: 'UUID',
        uuid: response.data.uuid,
        debug: '디버그메시지: 데모 getInitialProps 사용법'
    }

}