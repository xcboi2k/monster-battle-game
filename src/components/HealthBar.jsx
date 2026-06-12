import '..styles/HealthBar.css';

export default function HealthBar({
    name,
    currentHp,
    maxHp,
}) {
    const percentage = Math.max(
        (currentHp / maxHp) * 100,
        0
    )

    return (
        <div className="health-container">
            <div className="health-header">
                <span>{name}</span>

                <span>
                    {currentHp}/{maxHp}
                </span>
            </div>

            <div className="health-bar">
                <div
                    className="health-fill"
                    style={{
                        width: `${percentage}%`,
                    }}
                />
            </div>
        </div>
    )
}