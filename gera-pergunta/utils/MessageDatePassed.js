function decorate({years, months, days, hours, minutes, seconds}){

    if(years){
        return years > 1 ? `Há ${years} anos` : `Há ${years} ano`;
    }

    if(months){
        return months > 1 ? `Há ${months} meses` : `Há ${months} mês`;
    }

    if(days){
        return days > 1 ? `Há ${days} dias` : `Há ${days} dia`;
    }

    if(hours){
        return hours > 1 ? `Há ${hours} horas` : `Há ${hours} hora`;
    }

    if(minutes){
        return minutes > 1 ? `Há ${minutes} minutos` : `Há ${minutes} minuto`;
    }

    if(seconds){
        return seconds > 1 ? `Há ${seconds} segundos` : `Há ${seconds} segundo`;
    }else{
        return 'Agora';
    }

}

module.exports = decorate;