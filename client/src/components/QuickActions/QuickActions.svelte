<span class="label">Quick Actions:</span>
<div class="quick-actions">
  <div class="groups">
    <div class="group purple">
      <button class="action-btn purple">+ Custom</button>
    </div>

    <div class="divider"></div>

    <div class="group">
      <button class="action-btn red">Attack</button>
    </div>

    <div class="divider"></div>

    <div class="group">
      <button class="action-btn gray">STR Save</button>
      <button class="action-btn gray">DEX Save</button>
      <button class="action-btn gray">CON Save</button>
      <button class="action-btn gray">INT Save</button>
      <button class="action-btn gray">WIS Save</button>
      <button class="action-btn gray">CHA Save</button>
    </div>

    <div class="divider"></div>

    <div class="group">
      <button class="action-btn blue">Acrobatics</button>
      <button class="action-btn blue">Animal Handling</button>
      <button class="action-btn blue">Arcana</button>
      <button class="action-btn blue">Athletics</button>
      <button class="action-btn blue">Deception</button>
      <button class="action-btn blue">History</button>
      <button class="action-btn blue">Insight</button>
      <button class="action-btn blue">Intimidation</button>
      <button class="action-btn blue">Investigation</button>
      <button class="action-btn blue">Medicine</button>
      <button class="action-btn blue">Nature</button>
      <button class="action-btn blue">Perception</button>
      <button class="action-btn blue">Performance</button>
      <button class="action-btn blue">Persuasion</button>
      <button class="action-btn blue">Religion</button>
      <button class="action-btn blue">Sleight of Hand</button>
      <button class="action-btn blue">Stealth</button>
      <button class="action-btn blue">Survival</button>
    </div>
  </div>
</div>

<style>
  .quick-actions {
    background-color: #12122a;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .label {
    display: flex;
    color: #adadad;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding-bottom: 4px;
  }

  .groups {
    display: flex;
    gap: 16px;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
  }

  .group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5em;
  }

  .action-btn {
    padding: 8px 14px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    color: white;
    white-space: nowrap;
  }

  .purple {
    background-color: #7c3aed;
  }
  .red {
    background-color: #ef4444;
  }
  .gray {
    background-color: #374151;
  }
  .blue {
    background-color: #2563eb;
  }

  .divider {
    width: 1px;
    background-color: #4f4f68;
    align-self: stretch;
    justify-self: center;
  }
</style>
