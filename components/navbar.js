import React from 'react'
import Link from 'next/link'

export default () => (
    <nav className='nav'>
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/talents'>Talents</Link>
            </li>
            <li>
                <Link href='/Talents/developer'>Developers</Link>
            </li>
        </ul>
    </nav>
)