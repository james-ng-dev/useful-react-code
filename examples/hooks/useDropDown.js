import "./styles.css";
import { useDropdown } from "./useDropDown";

export default function App() {
    const talonProps = useDropdown();

    const { elementRef, triggerRef, expanded, setExpanded } = talonProps;

    return (
        <div className="App">
            <div class="tri" ref={triggerRef}>
                <button onClick={() => setExpanded(prev => !prev)} >trideptrai</button>
            </div>

            <div className={`${expanded ? 'show': 'hide'} box`} ref={elementRef}>
                <h1>this is box </h1>
            </div>
        </div>
    );
}
