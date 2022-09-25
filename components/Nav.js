import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <div className="NavWrapper">
            <div>
                <ul>
                    <li>
                        <Link href="/"> Home</Link>
                    </li>
                    <li>
                        <Link href="/about"> About</Link>
                    </li>
                    <li>
                        <Link href="/login"> Login</Link>
                    </li>
                    <li>
                        <Link href="/dashboard"> Dashboard</Link>
                    </li>
                    <li>
                        <Link href="/"> Home</Link>
                    </li>
                    <li>
                        <Link href="/"> Home</Link>
                    </li>
                </ul>
            </div>
     
    </div>
  )
}

export default Nav
