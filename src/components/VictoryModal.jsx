import '../styles/VictoryModal.css'

export default function VictoryModal({
    winner,
    onRestart,
}) {
    return (
        <div className="modal-overlay">
            <div className="victory-modal">
                <h2>
                    {winner === 'player'
                        ? '🎉 Victory!'
                        : '💀 Defeat!'}
                </h2>

                <p>
                    {winner === 'player'
                        ? 'You defeated the enemy!'
                        : 'The enemy defeated you!'}
                </p>

                <button onClick={onRestart}>
                    Battle Again
                </button>
            </div>
        </div>
    )
}