import create_ScoreManager from './scoreManager.js';
const scoreManager = create_ScoreManager ();
scoreManager.add_score("Alice", 85);
scoreManager.add_score("Bob", 72);
scoreManager.add_score("Charlie", 90);
scoreManager.add_score("David", 58);

console.log(scoreManager.get_scores());
console.log(scoreManager.get_sortedscores());
console.log(scoreManager.get_filteredscores(60));
console.log(scoreManager.get_averagescore());
