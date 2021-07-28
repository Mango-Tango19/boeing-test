$(document).ready(function () {
  const getmyfirstname = () => {
    return 'Иван Боингов'
  }

  const fillNameFromFunc = () => {
    const name = getmyfirstname()
    $('#guest-name').val(name)
    $('#guest-name').addClass('is-valid')
  }

  $("input[type='text']").change(function () {
    if ($(this).val().length >= 3) {
      $(this).addClass('is-valid')
      $(this).removeClass('is-invalid')
    } else {
      $(this).removeClass('is-valid')
      $(this).addClass('is-invalid')
    }
  })

  $("input[type='number']").change(function () {
    let age = +$("input[type='number']").val()
    if (18 <= age && age <= 100) {
      $(this).addClass('is-valid')
      $(this).removeClass('is-invalid')
    } else {
      $(this).removeClass('is-valid')
      $(this).addClass('is-invalid')
    }
  })

  $('#companySelect').change(() => {
    switch ($('select.form-select option:selected').val()) {
      case 'Boeing':
        $('.friend-info').addClass('hidden')
        fillNameFromFunc()
        break
      case 'Relative':
        $('.friend-info').removeClass('hidden')
        $('#guest-name').val('')
        $('#guest-name').removeClass('is-valid')
        $('#guest-name').removeClass('is-invalid')
        break
      default:
        return
    }
  })
})
