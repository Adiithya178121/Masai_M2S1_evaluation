const create_ScoreManager = () => {
    const scores = [];
    return {
        add_score(name , score) {
            scores.push({name,score});
        },
        get_scores(){
            return socres;
        },
        get_sortedscores() {
            return [...scores].sort((a,b) => b.score - a.score);
        },
        get_filteredscores (threshold){
            return scores.filter(student => student.score > threshold);
},
        get_avgeragescore() {
            if(scores.length === 0) { 
                return 0;
                const total = scores.reduce ((sum , student) => sum + sutdent,0)
                return total/scores.length
        }
 };
};
export default create_ScoreManager
