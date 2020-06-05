import React from 'react'
import {Link} from 'react-router-dom'

export default function Try() {
    return (
        <div classname="navbart">
        <ul className="nav navbart nav-pills justify-content-end">
  <li class="nav-item pio">
    <Link className="nav-link" to="#">Active</Link>
  </li>
  <li className="nav-item pio">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item pio">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item pio">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
        </div>
    )
}
