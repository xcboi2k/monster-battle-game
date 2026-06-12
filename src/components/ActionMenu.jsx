import '../styles/ActionMenu.css';

export default function ActionMenu({
    onAttack,
    onHeal,
    onRun,
}) {
    return (
        <div className="action-menu">
            <button onClick={onAttack}>
                Attack
            </button>

            <button onClick={onHeal}>
                Heal
            </button>

            <button onClick={onRun}>
                Run
            </button>
        </div>
    )
}