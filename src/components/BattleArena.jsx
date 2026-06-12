import '../styles/BattleArena.css'
import HealthBar from './HealthBar'
import MonsterSprite from './MonsterSprite'

export default function BattleArena({
    player,
    enemy,
}) {
    return (
        <div className="battle-arena">

            {/* Enemy */}
            <div className="enemy-info">
                <HealthBar
                    name={enemy.name}
                    currentHp={enemy.currentHp}
                    maxHp={enemy.maxHp}
                />
            </div>

            <div className="enemy-sprite">
                <MonsterSprite
                    monster={enemy}
                    isEnemy
                />
            </div>

            {/* Player */}
            <div className="player-sprite">
                <MonsterSprite monster={player} />
            </div>

            <div className="player-info">
                <HealthBar
                    name={player.name}
                    currentHp={player.currentHp}
                    maxHp={player.maxHp}
                />
            </div>
        </div>
    )
}
