"use client"

import { useParams } from "next/navigation"

export default function PageProvince(){
    const params = useParams()
    const province = params.provincia;
    return (<>
        {province}
    </>)
}