const {readdirSync} = require('fs');
const ascii = require('ascii-table')
let table = new ascii("Commands");
table.setHeading('Command', ' Load status');
module.exports= (client) => {
    readdirSync('./komendy/').forEach(dir => {
        const commands = readdirSync(`./komendy/${dir}/`).filter(file => file.endsWith('.js'));
        for(let file of commands){
            let pull = require(`../komendy/${dir}/${file}`);
            if(pull.name){
                client.commands.set(pull.name, pull);
                table.addRow(file,'✅')
            } else {
                table.addRow(file, '❌ -> Nie dodano help.name!')
                continue;
            }if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name))
        }
    });
    console.log(table.toString());
}