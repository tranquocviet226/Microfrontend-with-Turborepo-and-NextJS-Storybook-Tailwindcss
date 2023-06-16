# Hros Coding Conventions

## 1. Naming Components and Variables

**Use camelCase when naming objects, functions, and instances. Use PascalCase for class names and components.**

#### :x: BAD

    const comp = () => {
      const var1 = "Hello"
      return <div>{var1}</div>
    }

#### :white_check_mark: GOOD

    const MyComponent = () => {
      const greeting = "Hello"
      return <div>{greeting}</div>
    }

## 2. JSX Formatting:

#### :x: BAD

    const MyComponent = () => {
      return <div><span>Text</span></div>
    }

#### :white_check_mark: GOOD

    const MyComponent = () => {
      return (
        <div>
          <span>Text</span>
        </div>
      )
    }

## 3. Component Composition:

#### :x: BAD

    const App = () => {
      return (
        <div>
          <header>
            <h1>Welcome</h1>
          </header>
          <main>
            <h2>Content</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </main>
          <footer>
            <p>&copy; 2023 My App</p>
          </footer>
        </div>
      )
    }

#### :white_check_mark: GOOD

    const Header = () => {
      return (
        <header>
          <h1>Welcome</h1>
        </header>
      )
    }

    const Content = () => {
      return (
        <main>
          <h2>Content</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </main>
      )
    }

    const Footer = () => {
      return (
        <footer>
          <p>&copy; 2023 My App</p>
        </footer>
      )
    }

    const App = () => {
      return (
        <div>
          <Header />
          <Content />
          <Footer />
        </div>
      )
    }

## 4. Declarative programming is better:

#### :x: BAD

    const toLowerCase = input => {
    	const output = []
    	for (let i = 0; i < input.length; i++) {
    		output.push(input[i].toLowerCase())
    	}
    	return output
    }

#### :white_check_mark: GOOD

    const toLowerCase = input => input.map(
    	value => value.toLowerCase()
    )

## 5. Key:

#### :x: BAD

    const MyList = ({ items }) => {
      return (
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      )
    }

#### :white_check_mark: GOOD

    const MyList = ({ items }) => {
      return (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )
    }

## 6. Multi-line:

#### :x: BAD

    <div><Header /><div><Main content={...} /></div></div>

#### :white_check_mark: GOOD

    <div>
    	<Header />
    	<div>
    		<Main content={...} />
    	</div>
    </div>

## 7. Multi-properties:

#### :x: BAD

    <button foo="bar" veryLongPropertyName="baz" onSomething={this.handleSomething}	/>

#### :white_check_mark: GOOD

    <button
    	foo="bar"
    	veryLongPropertyName="baz"
    	onSomething={this.handleSomething}
    />

## 8. Conditionals:

#### 8.1 If

#### :x: BAD

    let button
    if (isLoggedIn) {
    	button = <LogoutButton />
    }
    return <div>{button}</div>

#### :white_check_mark: GOOD

    <div>
    	{isLoggedIn && <LoginButton />}
    </div>

---

#### 8.2 If else

#### :x: BAD

    let button
    if (isLoggedIn) {
    	button = <LogoutButton />
    } else {
    	button = <LoginButton />
    }
    return <div>{button}</div>

#### :white_check_mark: GOOD

    <div>
    	{isLoggedIn && <LoginButton />}
    </div>

---

#### 8.3 Multi conditions

#### :x: BAD

    <div>
    	{dataIsReady && (isAdmin || userHasPermissions) &&
    		<SecretData />
    	}
    </div>

#### :white_check_mark: GOOD

    const canShowSecretData = () => {
    	const { dataIsReady, isAdmin, userHasPermissions } = props
    	return dataIsReady && (isAdmin || userHasPermissions)
    }

    <div>
    	{canShowSecretData() && <SecretData />}
    </div>

## 9. Sub-rendering:

Split components into smaller functions in a way that lets us keep all the logic in the same component.

#### :white_check_mark: GOOD

    const renderUserMenu = () => {
    	// JSX for user menu
    }
    const renderAdminMenu = () => {
    	// JSX for admin menu
    }
    return (
    	<div>
    		<h1>Welcome back!</h1>
    		{userExists && renderUserMenu()}
    		{userIsAdmin && renderAdminMenu()}
    	</div>
    )

## 10. Higher-order Functions (HoF):

Functions are first-class objects, which means that they can be assigned to variables and passed as parameters to other functions

#### :white_check_mark: GOOD

    const add = (x, y) => x + y

    const log = func => (...args) => {
    	console.log(...args)
    	return func(...args)
    }

    const logAdd = log(add)

    logAdd(1, 9)  // return 10

## 11. Purity:

#### :x: BAD

    let x = 0
    const add = y => (x = x + y)

#### :white_check_mark: GOOD

    const add = (x, y) => x + y

## 12. Immutability:

In FP, a function, instead of changing the value of a variable, creates a new variable with a new value and returns it

#### :x: BAD

    const add3 = arr => arr.push(3)
    const myArr = [1, 2]
    add3(myArr) // [1, 2, 3]
    add3(myArr) // [1, 2, 3, 3]

#### :white_check_mark: GOOD

    const add3 = arr => arr.concat(3)
    const myArr = [1, 2]
    const result1 = add3(myArr) // [1, 2, 3]
    const result2 = add3(myArr) // [1, 2, 3]

## 13. Currying:

Currying is the process of converting a function thattakes multiple arguments into a function that takes one argument at a time, returning another function.

#### :heavy_exclamation_mark: Instead of writing

    const add = (x, y) => x + y

#### :white_check_mark: GOOD

    const add = x => y => x + y
    const add1 = add(1)
    add1(2) // 3
    add1(3) // 4

## 14. Composition:

Functions (and components) can be combined to produce new functions with more advanced features
and properties.

#### :white_check_mark: GOOD

    const add = (x, y) => x + y
    const square = x => x * x

    const addAndSquare = (x, y) => square(add(x, y))

## 15. Semi rule:

#### :x: BAD

    import type { RootState } from '@/stores/rootReducer';

    export default function Home() {
      return <div>Home</div>;
    };

#### :white_check_mark: GOOD

    import type { RootState } from '@/stores/rootReducer'

    export default function Home() {
      return <div>Home</div>
    }

## 16. Single Quote:

#### :x: BAD

    import type { RootState } from "@/stores/rootReducer"

    export default function Home() {
      return <div className="home">Home</div>
    }

#### :white_check_mark: GOOD

    import type { RootState } from '@/stores/rootReducer'

    export default function Home() {
      return <div className='home'>Home</div>
    }
