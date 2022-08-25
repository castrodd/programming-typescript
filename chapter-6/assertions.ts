// Type assertions (not safe!!!)

function formatInput(input: string) {
    console.log(input)
}

function getUserInput(): string | number {
    if (Math.random() < 0.5) {
        return "small"
    } else {
        return 1
    }
}

// Assert that input is string
var input
formatInput(input as string)

// Equvalent to:
formatInput(<string>input)


// Nonnull assertions
type Dialog = {
    id?:string
}

function closeDialog(dialog: Dialog) {
    if (!dialog.id) {
        return
    }
    setTimeout(() => 
      removeFromDOM(
        dialog,
        document.getElementById(dialog.id)!
      )
    )
}

function removeFromDOM(dialog: Dialog, element: Element) {
    element.parentNode!.removeChild(element)
    delete dialog.id
}