const memoryclear = {

    run : () => {
    
        for (let name in Memory.creeps){
        
            if (!Game.creeps[name]){
            
                delete Memory.creeps[name];
                console.log('已删除' + name);
            
            }
        
        }
    
    }

};


export default memoryclear;