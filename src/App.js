import logo from './logo.svg';
import './App.css';
import ActionMenu from './components/ActionMenu';
import BattleArena from './components/BattleArena';
import VictoryModal from './components/VictoryModal';
import useBattle from './hooks/useBattle';

function App() {
  const { player, enemy, battleLog, winner, turn, attack, specialAttack, heal, run, restartBattle, uiLocked } = useBattle()
  return (
    <div className="game">
      <BattleArena
          player={player}
          enemy={enemy}
      />
      <ActionMenu
    battleLog={battleLog}
    onAttack={attack}
    onHeal={heal}
    onRun={run}
    onSpecial={specialAttack}
    turn={turn}
    uiLocked={uiLocked}
/>
      {winner && (
        <VictoryModal
            winner={winner}
            onRestart={restartBattle}
        />
      )}
  </div>
  );
}

export default App;
