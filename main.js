import create_ScoreManager from './scoreManager.js';
const scoreManager = create_ScoreManager ();
scoreManager.add_score("Alice", 85);
scoreManager.add_score("Bob", 72);
scoreManager.add_score("Charlie", 90);
scoreManager.add_score("David", 58);

console.log(scoreManager.get_scores());
console.log(scoreManager.get_sortedScores());
console.log(scoreManager.get_filteredScores(60));
console.log(scoreManager.get_averagescore());
