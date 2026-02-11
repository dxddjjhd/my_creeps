interface CreepMemory {
    /**
     * 该 creep 在做的事
     */
    mode?: 'HARVESTING'|'UPGRADING'|'BUILDING'|'CARRYING'|'REPAIRING';
    /**
    该 creep 的角色
    **/
    role?: CreepType;
    
    //该creep拥有的标签，用于区分在哪干活
    tag?:CreepTag;

    //该creep的工作地点
    target?:string
}
type CreepType = 'upgrader'|'harvester'|'builder'|'worker'|'carrier'|'repairer';
type CreepTag = 'internal' | 'external';