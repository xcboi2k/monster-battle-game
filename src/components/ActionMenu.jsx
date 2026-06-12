import { useEffect, useState } from 'react';
import '../styles/ActionMenu.css';

export default function ActionMenu({
    battleLog,
    onAttack,
    onHeal,
    onRun,
    onSpecial,
    turn,
    uiLocked,
}) {
    const [showLog, setShowLog] = useState(false)

    // 🧠 whenever log updates → show log first
    useEffect(() => {
        if (!battleLog.length) return

        setShowLog(true)

        const timeout = setTimeout(() => {
            setShowLog(false)
        }, 1200) // log display duration

        return () => clearTimeout(timeout)
    }, [battleLog])

    return (
        <div className="action-menu">

            {/* ===================== */}
            {/* 🧾 BATTLE LOG MODE */}
            {/* ===================== */}
            {showLog ? (
                <div className="battle-log-box">
                    {battleLog.at(-1)}
                </div>
            ) : (
                <>
                    {/* ===================== */}
                    {/* 🎮 ACTION MODE */}
                    {/* ===================== */}
                    <button
                        disabled={uiLocked || turn !== 'player'}
                        onClick={onAttack}
                    >
                        Attack
                    </button>

                    <button
                        disabled={uiLocked || turn !== 'player'}
                        onClick={onSpecial}
                    >
                        Special
                    </button>

                    <button
                        disabled={uiLocked || turn !== 'player'}
                        onClick={onHeal}
                    >
                        Heal
                    </button>

                    <button
                        disabled={uiLocked || turn !== 'player'}
                        onClick={onRun}
                    >
                        Run
                    </button>
                </>
            )}
        </div>
    )
}