import { useEffect, useState } from "react"

export default function useBattle() {
    // =====================
    // BASE MONSTERS
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

    const [turn, setTurn] = useState('player')
    const [battleLog, setBattleLog] = useState([])
    const [winner, setWinner] = useState(null)

    // =====================
    // PLAYER ACTION
    // =====================
    function attack() {
        if (turn !== 'player' || winner) return

        const damage =
            Math.floor(Math.random() * 10) + 10

        setEnemy((prev) => {
            const newHp = Math.max(prev.currentHp - damage, 0)

            return {
                ...prev,
                currentHp: newHp,
            }
        })

        setBattleLog((prev) => [
            ...prev,
            `You dealt ${damage} damage!`,
        ])

        if (enemy.currentHp - damage <= 0) {
            setWinner('player')
            return
        }

        setTurn('enemy')
    }

    function heal() {
        if (turn !== 'player' || winner) return

        const healAmount =
            Math.floor(Math.random() * 10) + 8

        setPlayer((prev) => {
            const newHp = Math.min(
                prev.currentHp + healAmount,
                prev.maxHp
            )

            return {
                ...prev,
                currentHp: newHp,
            }
        })

        setBattleLog((prev) => [
            ...prev,
            `You healed ${healAmount} HP!`,
        ])

        setTurn('enemy')
    }

    function run() {
        if (turn !== 'player' || winner) return

        setBattleLog((prev) => [
            ...prev,
            'You ran away!',
        ])

        setWinner('enemy')
    }

    // =====================
    // ENEMY AI
    // =====================
    useEffect(() => {
        if (turn !== 'enemy' || winner) return

        const timeout = setTimeout(() => {
            const damage =
                Math.floor(Math.random() * 10) + 10

            setPlayer((prev) => {
                const newHp = Math.max(prev.currentHp - damage, 0)

                return {
                    ...prev,
                    currentHp: newHp,
                }
            })

            setBattleLog((prev) => [
                ...prev,
                `Enemy dealt ${damage} damage!`,
            ])

            if (player.currentHp - damage <= 0) {
                setWinner('enemy')
                return
            }

            setTurn('player')
        }, 1000)

        return () => clearTimeout(timeout)
    }, [turn, winner])

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

        setTurn('player')
        setBattleLog([])
        setWinner(null)
    }

    // =====================
    // RETURN TO UI
    // =====================
    return {
        player,
        enemy,
        battleLog,
        winner,
        attack,
        heal,
        run,
        restartBattle,
    }
}