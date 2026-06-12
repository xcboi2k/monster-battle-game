import logo from './logo.svg';
import './App.css';
import ActionMenu from './components/ActionMenu';
import BattleArena from './components/BattleArena';
import VictoryModal from './components/VictoryModal';
import BattleLog from './components/BattleLog';
import useBattle from './hooks/useBattle';

function App() {
  const { player, enemy, battleLog, winner, attack, heal, run, restartBattle } = useBattle()
  return (
    <div className="game">
      <BattleArena
          player={player}
          enemy={enemy}
      />

      <BattleLog
          messages={battleLog}
      />

      <ActionMenu
          onAttack={attack}
          onHeal={heal}
          onRun={run}
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
