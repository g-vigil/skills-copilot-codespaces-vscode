function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['JS', 'PHP', 'Python'],
        showSkills: function () {
            var _this = this;
            this.skills.forEach(function (skill) {
                console.log(_this.name + " knows " + skill);
            });
        }
    };
    member.showSkills();
}