import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import ProductScreen from '@app/screens/ProductScreen/ProductScreen';
export default function Products() {
    const list = ['/nam', '/nu', '/nam-giay-cao', '/nu-giay']
    const [data, setData] = useState(false);
    const router = useRouter()
    useEffect(() => {
        if (list.includes(router.asPath)) {
            setData(true)
        } else {
            router.push('/')
        }
        return () => {

        }
    }, [])

    return <>
        {data && <ProductScreen />}
    </>;
}
