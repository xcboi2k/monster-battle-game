import { useEffect, useState } from "react"

export default function useBattle() {
    // =====================
    // MONSTERS
    // =====================
    const [player, setPlayer] = useState({
        name: 'Wolf',
        maxHp: 100,
        currentHp: 100,
        sprite: '🐺',
    })

    const [enemy, setEnemy] = useState({
        name: 'Dragon',
        maxHp: 100,
        currentHp: 100,
        sprite: '🐲',
    })

    const [enemyStatus, setEnemyStatus] = useState(null)
    const [turn, setTurn] = useState('player')
    const [uiLocked, setUiLocked] = useState(false)
    const [battleLog, setBattleLog] = useState([])
    const [winner, setWinner] = useState(null)

    // =====================
    // WIN CHECK (SAFE)
    // =====================
    function checkWin(nextEnemyHp, nextPlayerHp) {
        if (nextEnemyHp <= 0) {
            setWinner('player')
            return true
        }

        if (nextPlayerHp <= 0) {
            setWinner('enemy')
            return true
        }

        return false
    }

    // =====================
    // PLAYER ACTIONS
    // =====================
    function attack() {
    if (turn !== 'player' || winner || uiLocked) return

    setUiLocked(true)

    const damage = Math.floor(Math.random() * 10) + 10

    setEnemy((prev) => {
        const nextHp = Math.max(prev.currentHp - damage, 0)

        setBattleLog((log) => [
            ...log,
            `⚔️ You dealt ${damage} damage!`,
        ])

        const ended = nextHp <= 0
        if (ended) setWinner('player')

        return {
            ...prev,
            currentHp: nextHp,
        }
    })

    setTurn('enemy')

    // ⏳ delay before next interaction
    setTimeout(() => {
        setUiLocked(false)
    }, 600)
}

    function heal() {
        if (turn !== 'player' || winner) return

        const healAmount = Math.floor(Math.random() * 10) + 8

        setPlayer((prev) => {
            const nextHp = Math.min(
                prev.currentHp + healAmount,
                prev.maxHp
            )

            setBattleLog((log) => [
                ...log,
                `💚 You healed ${healAmount} HP!`,
            ])

            setTurn('enemy')

            return {
                ...prev,
                currentHp: nextHp,
            }
        })
    }

    function run() {
        if (turn !== 'player' || winner) return

        setBattleLog((prev) => [
            ...prev,
            '🏃 You ran away!',
        ])

        setWinner('enemy')
    }

    // =====================
    // SPECIAL ATTACK
    // =====================
    function specialAttack() {
    if (turn !== 'player' || winner || uiLocked) return

    setUiLocked(true)

    const damage = Math.floor(Math.random() * 20) + 15

    setEnemy((prev) => {
        const nextHp = Math.max(prev.currentHp - damage, 0)

        setBattleLog((log) => [
            ...log,
            `🔥 SPECIAL ATTACK! (${damage})`,
        ])

        if (nextHp <= 0) setWinner('player')

        return {
            ...prev,
            currentHp: nextHp,
        }
    })

    setTurn('enemy')

    setTimeout(() => setUiLocked(false), 600)
}

    // =====================
    // ENEMY AI
    // =====================
    useEffect(() => {
        if (turn !== 'enemy' || winner) return

    // 🧠 THINKING DELAY STARTS HERE
    const timeout = setTimeout(() => {

        const damage = Math.floor(Math.random() * 10) + 10

        setPlayer((prev) => {
            const nextHp = Math.max(prev.currentHp - damage, 0)

            setBattleLog((log) => [
                ...log,
                '🤖 Enemy is thinking...',
                `👾 Enemy dealt ${damage} damage!`,
            ])

            if (nextHp <= 0) setWinner('enemy')

            return {
                ...prev,
                currentHp: nextHp,
            }
        })

        setTurn('player')

    }, 1200) // 👈 THIS is the thinking delay

    return () => clearTimeout(timeout)
    }, [turn, winner, enemy.currentHp, player.currentHp])

    // =====================
    // RESET GAME
    // =====================
    function restartBattle() {
        setPlayer({
            name: 'Wolf',
            maxHp: 100,
            currentHp: 100,
            sprite: '🐺',
        })

        setEnemy({
            name: 'Dragon',
            maxHp: 100,
            currentHp: 100,
            sprite: '🐲',
        })

        setEnemyStatus(null)
        setTurn('player')
        setBattleLog([])
        setWinner(null)
    }

    // =====================
    // EXPORT
    // =====================
    return {
        player,
        enemy,
        enemyStatus,
        battleLog,
        winner,
        turn,
        uiLocked,

        attack,
        heal,
        run,
        specialAttack,
        restartBattle,
    }
}