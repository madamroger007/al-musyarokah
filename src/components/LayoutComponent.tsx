import React from 'react'
import Navbar from './elemen/navbar/Navbar'
import Footer from './elemen/footer/Footer'

function LayoutComponent({ children }: React.PropsWithChildren) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default LayoutComponent