class Image {
    constructor(obj) {
        this.isItCarbs = !!obj.carbs
        this.isItProts = !!obj.prots
        this.isItFats = !!obj.fats
        this.filename = obj.filename
    }
}

module.exports = Image