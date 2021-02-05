import { Button } from '@material-ui/core'
const menu = () => {
  return (
    <header className="jsx-2513035839 sticky">
      <div className="jsx-3256009215">
        <nav className="jsx-3649957598 f-reset">
          <div className="jsx-3649957598 links">
            <a
              href="/"
              target=""
              rel="noopener noreferrer"
              className="jsx-3649957598 mute"
            >
              Home
            </a>{' '}
            <a
              href="/"
              target=""
              rel="noopener noreferrer"
              className="jsx-3649957598 mute"
            >
              About
            </a>{' '}
            <a
              href="/contact"
              target=""
              rel="noopener noreferrer"
              className="jsx-3649957598 mute"
            >
              Contact
            </a>{' '}
            <div className="jsx-3649957598 login">
              <a href="/" className="jsx-4279592588 btn fw4 no-drag">
                Login
              </a>
            </div>
            <Button color="primary">Hello World</Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default menu
