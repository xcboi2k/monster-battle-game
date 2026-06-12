import '../styles/MonsterSprite.css'

export default function MonsterSprite({
    monster,
    isEnemy = false,
    isHit = false,
}) {
    return (
        <div
            className={`
                monster-sprite
                ${isEnemy ? 'enemy' : ''}
                ${isHit ? 'hit' : ''}
            `}
        >
            {monster.sprite}
        </div>
    )
}