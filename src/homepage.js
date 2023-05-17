import {ResponsiveAppBar} from './navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Homepage = () => {
    return (
        <div>
            <Box>
            <Typography variant='h3'>Портал Тюркская Руническая Эпиграфика</Typography>
            <h2>Что сделано:</h2>
            <ul>
                <li><Typography>данные на сайт поступают из подключенной реляционной БД </Typography></li>
                <li>на странице "Каталог" можно посмотреть (а также отфильтровать) список всех объектов БД </li>
                <li>со страницы Каталога по клику на ID можно перейти на страничку объекта </li>
                <li>добавлена карта</li>
                {/* <li></li>
                <li></li> 
                <li></li> 
                <li></li>              
                 */}
                
                
            </ul>
            <h2> Что предстоит сделать:</h2>
                <ul>
                    <li>добавить на страницу объекта галерею с изображениями</li>
                    <li>добавить на страницу объекта ссылку на модель</li>
                    <li>добавить на карту легенду и поиск</li>
                    <li>добавить доп фильтры в Каталог "упоминается в перечне Базылхана/ДТС/.."</li>
                    <li>и многое другое...</li>
                    <li>таймлайн с находками?.. </li>
                    
                
                
                </ul>
                </Box>
        </div>
       
    )
}

export {Homepage}