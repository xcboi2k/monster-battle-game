import { useEffect, useState } from "react"

import React from 'react'

export default function useBattle() {
    const [playerHp, setPlayerHp] = useState(100)
    const [enemyHp, setEnemyHp] = useState(100)

    const [turn, setTurn] = useState('player')

    const [battleLog, setBattleLog] = useState([])

    function attack() {
        if (turn !== 'player') return

        const damage =
            Math.floor(Math.random() * 10) + 10

        setEnemyHp((prev) =>
            Math.max(prev - damage, 0)
        )

        setBattleLog((prev) => [
            ...prev,
            `You dealt ${damage} damage!`,
        ])

        setTurn('enemy')
    }

    useEffect(() => {
        if (turn !== 'enemy') return

        const timeout = setTimeout(() => {
            const damage =
                Math.floor(Math.random() * 10) + 10

            setPlayerHp((prev) =>
                Math.max(prev - damage, 0)
            )

            setBattleLog((prev) => [
                ...prev,
                `Enemy dealt ${damage} damage!`,
            ])

            setTurn('player')
        }, 1000)

        return () => clearTimeout(timeout)
    }, [turn])
}
