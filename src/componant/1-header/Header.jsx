import { useState } from "react"
import "./header.css"
const Header = () => {
  const [showMenue, setshowMenue] = useState(false)
  
  return (
    <header>
      <button onClick={() => {
        setshowMenue(true)
      }
      } className="menue"><i class="fa-solid fa-bars"></i></button>
      <div/>
      <nav>
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">projects</a>
          </li>
          <li>
            <a href="">skills</a>
          </li>
          <li>
            <a href="">contact</a>
          </li>
        </ul>
      </nav>
      
      {showMenue && (
        <div className="fixed">
        <ul>
          <li>
            <button onClick={() => {
              setshowMenue(false)
            }
            }><i class="fa-solid fa-xmark"></i></button>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">projects</a>
          </li>
          <li>
            <a href="">sklills</a>
          </li>
          <li>
            <a href="">contact</a>
          </li>
        </ul>
      </div>
      )

      }
    </header>
  )
}

export default Header