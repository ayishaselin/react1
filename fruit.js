const roots = ReactDOM.createRoot(document.getElementById('roots'));
const myElement = <h1>FRUITS</h1>;

roots.render(myElement);

const reactContentRoot = document.getElementById("root")
const myJSXElement =(
    <ol>
        <li>APPLE</li>
        <li>ORANGE</li>
        <li>MANGO</li>
        <li>BANANA</li>
        <li>GRAPE</li>
    </ol>
)

ReactDOM.render(myJSXElement, reactContentRoot)