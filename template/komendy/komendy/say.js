module.exports = {
    name: "say",

    run: async(client, message, args) => {


if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Nie posiadasz wystarczających Uprawnień!")

let przemowapanajanapawła2 = args.join(" ")

message.channel.send(przemowapanajanapawła2)

    }
}