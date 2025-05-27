/*
    axios는 HTTP 요청을 보내기 위한 라이브러리입니다
*/
import axios from 'axios';
/*
    CategoryService는 객체입니다. 이 객체는 여러 개의 서비스 함수를 포함하고 있으며, 여기서는
    getCategories라는 비동기 함수만 정의되어 있습니다.
    서비스랑, 주로 데이터와 관련된 로직을 처리하는 코드들을 모은 파일을 의미합니다
*/
const CategoryService = {
    /*
        getCategories는 비동기 함수로, 서버로부터 카테고리를 가져오는 작업을 처리
        
        async는 이 함수가 비동기 함수임을 나타냅니다. 비동기 함수는 await를 사용할 수 있습니다.
    */
    getCategories: async () => {
        try {
            /* 
                HTTP GET 요청을 보내는 코드
                
                URL : 'http://localhost:8080/api/categories'는 API의 엔드포인트(카테고리 목록을
                가져오는 URL)입니다.

                await : await는 비동기 작업이 끝날 때까지 기다리라는 명령어입니다. axios.get은
                네트워크 요청을 보내고, 그 응답을 받을 때까지 기다립니다.
            
                응답이 오면 response라는 변수에 저장장
            */
            const response = await axios.get('http://localhost:8080/api/categories');
            /*
                응답객체의 data 속성에 실제 데이터가 포함됩니다.
                response.data : 서버에서 반환한 카테고리 목록
            */
            return response.data;
        } catch(error) {
            console.error("There was an error fetching the categories:", error);
        }
    }
};
/*
    export default : CategoryService 객체를 기본 내보내기 방식으로 내보냄
    이렇게 하면 다른 파일에서 import CategoryService from './CategoryService';와 같이 불러와서
    사용 가능
*/
export default CategoryService;