function simulate() {
  const experiment = document.getElementById('experimentSelect').value;
  const chemical1 = document.getElementById('chemical1').value;
  const chemical2 = document.getElementById('chemical2').value;
  const ratio = document.getElementById('ratio').value;
  const concentration = document.getElementById('concentration').value;
  
  let result = '';

  switch (experiment) {
    case 'neutralization':
      result = simulateNeutralization(chemical1, chemical2, ratio, concentration);
      break;
    case 'precipitation':
      result = simulatePrecipitation(chemical1, chemical2, ratio, concentration);
      break;
    case 'combustion':
      result = simulateCombustion(chemical1, chemical2, ratio, concentration);
      break;
    case 'electrolysis':
      result = simulateElectrolysis(chemical1, chemical2, ratio, concentration);
      break;
    case 'displacement':
      result = simulateDisplacement(chemical1, chemical2, ratio, concentration);
      break;
    default:
      result = 'Select a valid experiment';
  }

  document.getElementById('result').innerText = result;
}

function simulateNeutralization(chemical1, chemical2, ratio, concentration) {
  // Example logic
  if (chemical1 === 'HCl' && chemical2 === 'NaOH') {
    return `Neutralization of ${chemical1} and ${chemical2} at ${concentration}% concentration and ${ratio} ratio gives NaCl and H2O.`;
  } else {
    return `No reaction for ${chemical1} and ${chemical2}`;
  }
}

function simulatePrecipitation(chemical1, chemical2, ratio, concentration) {
  // Example logic
  if (chemical1 === 'AgNO3' && chemical2 === 'NaCl') {
    return `Precipitation of ${chemical1} and ${chemical2} at ${concentration}% concentration and ${ratio} ratio forms AgCl.`;
  } else {
    return `No reaction for ${chemical1} and ${chemical2}`;
  }
}

function simulateCombustion(chemical1, chemical2, ratio, concentration) {
  // Example logic
  if (chemical1 === 'CH4' && chemical2 === 'O2') {
    return `Combustion of ${chemical1} and ${chemical2} at ${concentration}% concentration and ${ratio} ratio gives CO2 and H2O.`;
  } else {
    return `No reaction for ${chemical1} and ${chemical2}`;
  }
}

function simulateElectrolysis(chemical1, chemical2, ratio, concentration) {
  // Example logic for electrolysis
  if (chemical1 === 'H2O') {
    return `Electrolysis of ${chemical1} at ${concentration}% concentration forms H2 and O2.`;
  } else {
    return `No electrolysis reaction for ${chemical1}`;
  }
}

function simulateDisplacement(chemical1, chemical2, ratio, concentration) {
  // Example logic for displacement reaction
  if (chemical1 === 'Zn' && chemical2 === 'CuSO4') {
    return `Displacement of ${chemical2} by ${chemical1} at ${concentration}% concentration and ${ratio} ratio gives ZnSO4 and Cu.`;
  } else {
    return `No displacement reaction for ${chemical1} and ${chemical2}`;
  }
}
