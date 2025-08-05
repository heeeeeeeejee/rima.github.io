/* script.js */
// 모달 관련 함수
function openModal(charNum) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    
    // 캐릭터 데이터 (실제 사용 시 본인 데이터로 변경)
    const characters = [
        {
            name: '캐릭터 이름 1',
            image: 'character1.jpg',
            desc: '캐릭터 1의 상세 설명입니다. 나이, 성별, 성격, 백스토리 등을 추가할 수 있습니다.'
        },
        {
            name: '캐릭터 이름 2',
            image: 'character2.jpg',
            desc: '캐릭터 2의 상세 설명입니다. 특기, 무기, 관계도 등을 추가할 수 있습니다.'
        }
    ];

    const selectedChar = characters[charNum - 1];
    modalTitle.textContent = selectedChar.name;
    modalImg.src = selectedChar.image;
    modalDesc.textContent = selectedChar.desc;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// 외부 클릭 시 모달 닫기
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}